import classNames from 'classnames';

import { useDispatch, useSelector } from 'react-redux';
import { filterCharacters, heroesFetched } from '../../actions';

const HeroesFilters = () => {
    const {heroes, activeClass} = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    <button 
                        value="all"
                        onClick={() => dispatch(heroesFetched(heroes))} 
                        className={classNames('btn', 'btn-outline-dark', {'active': activeClass === 'all' })}>
                            Все
                        </button>
                    <button 
                        value="fire"
                        onClick={(e) => dispatch(filterCharacters(e.currentTarget.value))} 
                        className={classNames('btn', 'btn-danger', {'active': activeClass === 'fire' })}>
                            Огонь
                        </button>
                    <button 
                        value="water"
                        onClick={(e) => dispatch(filterCharacters(e.currentTarget.value))} 
                        className={classNames('btn', 'btn-primary', {'active': activeClass === 'water' })}>
                            Вода
                        </button>
                    <button 
                        value="wind"
                        onClick={(e) => dispatch(filterCharacters(e.currentTarget.value))} 
                        className={classNames('btn', 'btn-success', {'active': activeClass === 'wind' })}>
                            Ветер
                        </button>
                    <button 
                        value="earth"
                        onClick={(e) => dispatch(filterCharacters(e.currentTarget.value))} 
                        className={classNames('btn', 'btn-secondary', {'active': activeClass === 'earth' })}>
                            Земля
                        </button>
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;