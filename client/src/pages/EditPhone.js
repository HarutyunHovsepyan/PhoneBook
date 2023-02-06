import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import '../style/editPhone.css'

function EditPhone() {
    const { id } = useParams()
    const phones = useSelector(state => state.phones)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();
    useEffect(() => {
        dispatch({ type: "GET_PHONE", id })
    }, [])
    const onChangePhone = (data) => {
        dispatch({ type: 'EDIT_PHONE', data, id, navigate })
        reset()
        window.location.href = "/"
    }
    return (
        <div>
            <div className="container">
                <header className="hero">
                    <i onClick={() => window.location.href = "/"} className="fas fa-chevron-circle-left back-btn"></i>
                    <h2 className="header-main">Edit Phones</h2>
                </header>
                <form className="w-25" onSubmit={handleSubmit(onChangePhone)}>
                    <section className="contact-info">
                        <div className="info-line">
                            <i className="fas fa-user-circle icon-gradient"></i>
                            <label htmlFor="name"></label>
                            <input type="text" className="type" name="name"
                                defaultValue={phones.name}
                                {...register('name',
                                    { required: true },
                                    { minLength: 3 }
                                )} />
                        </div>
                        {errors.name && <p className="text-danger">No Name or Name length less 3</p>}
                        <div className="info-line">
                            <i className="fas fa-phone icon-gradient"></i>
                            <label htmlFor="phoneNumber"></label>
                            <input type="number" className="type" name="phoneNumber"
                               defaultValue={phones.phoneNumber}
                                {...register('phoneNumber',
                                    { required: true },
                                    { minLength: 8 }
                                )} />
                        </div>
                        {errors.phoneNumber && <p className="text-danger">Phone number must be minLength 8.</p>}
                        <section className="button-container">
                            <div className="update-contact">
                                <i className="fas fa-check-circle icon-gradient"></i>
                                <button
                                    className="button">Save Contact
                                </button>
                            </div>
                        </section>
                    </section>
                </form>
            </div>

        </div >
    )
}
export default EditPhone