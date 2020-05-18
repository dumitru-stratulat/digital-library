import React,{useContext,useState} from 'react'
import { Form,Modal,Rate,Input,Button } from 'antd';
import {Context as ReviewContext} from '../context/ReviewContext'
import { useTheme } from "../context/ThemeContext";
import "antd/dist/antd.css";


const ReviewModal = ({showModal,setShowModal,selectedBookId}) => {
    const  {state:{ review },addReview} = useContext(ReviewContext)
    const [rate,setRate] = useState(0)
    const [form] = Form.useForm();
    const {dark} = useTheme();
    
    return (
        <div>
            <Modal
                title="Leave feedback"
                visible={showModal}
                onCancel={() => { setShowModal(false) }}
                footer={null}
                bodyStyle={ dark ? {backgroundColor: 'black',color: '#ccc'}: null }
            >
                <Form
                    form={form}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={(values)=>{
                        addReview(values,rate,review,selectedBookId)
                        form.resetFields()
                        setRate(0)
                        setShowModal(false)
                    }}
                >
                    <Form.Item
                    >
                        <span>
                            <Rate
                             defaultValue={0}
                             onChange={(value)=>setRate(value)} value={rate} 
                            />
                        </span>
                    </Form.Item>

                    <Form.Item
                        label={dark ? "": "Comment:"}
                        name="comment"
                        style={{color: 'white'}}
                        rules={[{
                            required: true,
                            message: 'Please input your comment!'
                        },]}> 
                        <span >
                            { dark ? <p className="textarea-name">Comment:</p> : null}
                            <Input.TextArea />
                        </span>
                     </Form.Item> 
                   
                     <Form.Item >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>

            </Modal>
        </div>
    )
}

export default ReviewModal
