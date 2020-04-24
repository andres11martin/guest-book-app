import { useFormik } from 'formik';
import FormStyle from "./UI/FormStyle"
import Button from "./UI/Button"
import Input from "./UI/Input"
import api from "../lib/api"

const messageStyle = {
    height: "20vh",
    marginBottom: "10px",
    padding: "5px",
    width: "100%",
    wordBreak: "break-word",
    fontFamily: "San Francisco",
    fontSize: "16px",
}

const MessageForm = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            city: "",
            message: "",
        },

        onSubmit: async (data, { setSubmitting, setErrors, setStatus, resetForm }) => {
            const response = await api.post('/posts', data);
            console.log('response', response);
            resetForm({})
        }
    })

    return (
        <FormStyle onSubmit={formik.handleSubmit}>
            <h2>Leave your message!</h2>
            <label for="name">Name:</label>
            <Input
                type="text"
                name="name"
                placeholder="Ana, Pedro, Juan..."
                value={formik.values.name}
                onChange={formik.handleChange}
            />

            <label for="city">Your city:</label>
            <Input
                type="text"
                name="city"
                placeholder="Montevideo, Dublin..."
                value={formik.values.city}
                onChange={formik.handleChange}
            />

            <label for="message">Your message:</label>
            <textarea
                style={messageStyle}
                type="text"
                name="message"
                placeholder="Andrés, sos un capo..."
                value={formik.values.message}
                onChange={formik.handleChange}
            />
            <Button type="Submit">Submit</Button>
        </FormStyle>
    )
}

export default MessageForm