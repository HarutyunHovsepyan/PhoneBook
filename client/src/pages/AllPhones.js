import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import '../style/allPhone.css'

function AllPhones() {
    const dispatch = useDispatch()
    const phones = useSelector(state => state.phones)
    useEffect(() => {
        dispatch({ type: 'ALL_PHONE' })
    }, [])
    const deletePhone = (id) => {
        dispatch({ type: 'DELETE_PHONE', id, phones })
    }
    const onChangeHandler = (text) => {
        dispatch({ type: "FIND_PHONE", text })
    }
    return (
        <div>
            <div className="container">
                <h2 className="header-main">All Phones</h2>
                <header className="header">
                    <form className="header-bar">
                        <input type="search" className="contact-search" name="search-area" onKeyUp={e => onChangeHandler(e.target.value)
                        } />
                    </form>
                    <Link to='/addPhone' className="fa fa-plus"></Link>
                </header>
                <section className="contacts-library">
                    <ul className="contacts-list">
                        {phones.map((phone, id) => {
                            return (
                                <div key={id}>
                                    <div className="contact-section">
                                        <li className="list__item">
                                            <Link to={"morePhone/" + phone.id} className="contact-to">
                                                <p className="contact-name">{phone.name}</p>
                                                <p className="contact-name">{phone.phoneNumber}</p>
                                            </Link>
                                        </li>
                                        <li className="list__item">
                                            <Link to={"editPhone/" + phone.id} className="fas fa-edit contact-to-edit" />
                                            <button onClick={() => deletePhone(phone.id)} className="fas fa-remove"></button>
                                        </li>
                                    </div>
                                    <hr />
                                </div>
                            )
                        })}
                    </ul >
                </section >
            </div>
        </div >
    )
}
export default AllPhones