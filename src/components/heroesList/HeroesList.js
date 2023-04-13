import {useHttp} from '../../hooks/http.hook';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import { heroesFetching, heroesFetched, heroesFetchingError, optionsFetched } from '../../actions';
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';

const HeroesList = () => {

    const filteredHeroesSelector = createSelector(
        (state) => state.filters.activeClass,
        (state) => state.heroes.heroes,
        (filter, heroes) => {
            if (filter === 'all') {
                return heroes;
            } else {
                return heroes.filter(item => item.element === filter);
            }
        }
    );

    const filteredHeroes = useSelector(filteredHeroesSelector);
    const heroesLoadingStatus = useSelector(state => state.heroes.heroesLoadingStatus);
    const dispatch = useDispatch();
    const {request} = useHttp();

    const loadData = async () => {
        dispatch(heroesFetching());
        await request("http://localhost:3001/heroes")
                .then(data => dispatch(heroesFetched(data)))
                .catch(() => dispatch(heroesFetchingError()))

        await request("http://localhost:3001/filters")
                .then(data => dispatch(optionsFetched(data)))
                .catch(() => dispatch(heroesFetchingError()))
    }

    const deleteChar = async(id) => {
        dispatch(heroesFetching());
        await request(`http://localhost:3001/heroes/${id}`, "DELETE");
        await loadData();
    }

    useEffect(() => {
        loadData();
        // eslint-disable-next-line
    }, []);

    if (heroesLoadingStatus === "loading") {
        return <Spinner/>;
    } else if (heroesLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const renderHeroesList = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Героев пока нет</h5>
        }

        return arr.map(({id, ...props}) => {
            return <HeroesListItem key={id} deleteChar={() => deleteChar(id)} {...props}/>
        })
    }

    const elements = renderHeroesList(filteredHeroes);
    return (
        <ul>
            {elements}
        </ul>
    )
}

export default HeroesList;