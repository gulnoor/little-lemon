import * as Yup from "yup"
import { ErrorMessage, Field, Form, Formik } from "formik"
import Button from "./Button/Button"

const Checkout = () => {



    const handleSubmit = (e) => {
        e.preventDefault()

    }
    return (
        <div className="checkoutContainer text-on-surface flex flex-wrap  gap-2 m-2" >
            <div className="address p-8 min-w-[300px] flex-auto rounded-2xl bg-surface-container-highest" >
                <h1>Address</h1>
                <p>123 A2 BETA Town, Alphaland</p>
            </div>
           
            <div className="order-summary  p-8 min-w-[300px]  flex-auto grid grid-cols-2 rounded-2xl bg-surface-container-highest">
                <h1 className="col-span-2">Your Order</h1>
                <span> 2 x burgers</span>
                <span>price</span>
                <div className="divider col-span-2 border-b mx-4"></div>
                <span>subtotal</span>
                <span>98 rs</span>
                <span>Delivey Fee</span>
                <span>89rs</span>
                <span>Total</span>
                <span>Rs. 8954.646</span>
            </div>
            <div className="payment p-8 min-w-[50%] flex-auto rounded-2xl bg-surface-container-highest">
                <h1>Select Payment</h1>
                <Formik
                    initialValues={{ payment: "" }
                    }
                    validationSchema={Yup.object({
                        payment: Yup.string().required("Payment method is required"),
                    })}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <fieldset className="flex flex-col" name="payment" >
                            <label>
                                <Field className="m-4" name="payment" value="cod" type="radio"></Field>
                                Cash on Delivery
                            </label>

                            <label>
                                <Field className="m-4" name="payment" value="card" type="radio"></Field>
                                Credit Card
                            </label>
                            <ErrorMessage name="payment"></ErrorMessage>
                        </fieldset>

                        <Button htmlType={"submit"}>Confirm</Button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Checkout;