import React, { PureComponent } from 'react'
import { Button, Form, Input, Radio } from 'antd'
import FormItem from '../../components/FormItem'
import InputArray from '../../components/InputArray'

import './index.less'

const RadioGroup = Radio.Group

const options = [
    { label: '男', value: 1 },
    { label: '女', value: 2 },
]

class Test extends PureComponent {
    handleSubmit = (e) => {
        e.preventDefault();

        const { form: { validateFields } } = this.props

        validateFields((errors, values) => {
            if (errors) {
                return;
            }
            console.log(values)
        })
    }

    render() {
        const { form: { getFieldDecorator } } = this.props

        const nameDecorator = getFieldDecorator('name', { initialValue: [] })
        const sexDecorator = getFieldDecorator('sex')

        return (
            <section>
                <Form layout="horizontal" onSubmit={this.handleSubmit}>
                    <FormItem label="姓名" hasFeedback={false}>
                        {nameDecorator(<InputArray />)}
                    </FormItem>

                    <FormItem label="年龄">
                        {sexDecorator(<RadioGroup options={options} />)}
                    </FormItem>

                    <FormItem buttonsContainer>
                        <Button type="primary" size="default" htmlType="submit">提交</Button>
                    </FormItem>
                </Form>
            </section>
        )
    }
}

export default Form.create()(Test)