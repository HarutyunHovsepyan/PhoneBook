import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import '../style/editPhone.css'

function AddPhone() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onClick = async (data) => {
        await dispatch({ type: 'ADD_PHONE', data })
        reset()
        navigate('/')
    }
    return (
        <div>
            <div className="container">
                <header className="hero">
                    <Link to='/'>
                        <i className="fas fa-chevron-circle-left back-btn"></i>
                    </Link>
                    <h2 className="header-main">Add Phone</h2>
                </header>
                <form className="w-25" onSubmit={handleSubmit(onClick)}>
                    <section className="contact-info">
                        <div className="info-line">
                            <i className="fas fa-user-circle icon-gradient"></i>
                            <label htmlFor="name"></label>
                            <input type="text" className="type " name="name"
                                placeholder="Name"
                                {...register('name',
                                    { required: true },
                                    { minLength: 3 },
                                )} />
                        </div>
                        {errors.name && <p className="text-danger">No Name.</p>}
                        <div className="info-line">
                            <i className="fas fa-user-circle icon-gradient"></i>
                            <label htmlFor="lastName"></label>
                            <input type="text" className="type" name="lastName"
                                placeholder="Last Name"
                                {...register('lastName',
                                    { required: true },
                                    { minLength: 3 },
                                )}
                            />
                        </div>
                        {errors.lastName && <p className="text-danger">No last Name.</p>}
                        <div className="info-line">
                            <i className="fas fa-phone icon-gradient"></i>
                            <label htmlFor="phoneNumber"></label>
                            <input type="number" className="type" name="phoneNumber"
                                placeholder="Phone Number"
                                {...register('phoneNumber',
                                    { required: true },
                                    { minLength: 8 }
                                )}  />
                        </div>
                        {errors.phoneNumber && <p className="text-danger">Phone number must be minLength 8.</p>}
                        <div className="info-line">
                            <i className="fas fa-home icon-gradient location"></i>
                            <label htmlFor="homeNumber"></label>
                            <input type="number" className="type" name="homeNumber"
                                placeholder="Home Number"
                                {...register('homeNumber',
                                    { required: true },
                                    { minLength: 8 }
                                )} />
                        </div>
                        {errors.homeNumber && <p className="text-danger">Home number must be minLength 8.</p>}
                        <div className="info-line">
                            <i className="fas fa-envelope icon-gradient"></i>
                            <label htmlFor="email"></label>
                            <input type="email" className="type" name="email"
                                placeholder="E-mail"
                                {...register('email',
                                    { required: true },
                                )} />
                        </div>
                        {errors.email && <p className="text-danger">Please enter valid Email address.</p>}
                        <section className="button-container">
                            <div className="update-contact">
                                <i className="fas fa-check-circle icon-gradient"></i>
                                <button
                                    className="button">Save Contact</button>
                            </div>
                        </section>
                    </section>
                </form>
            </div>
        </div >
    )
}
export default AddPhone