import React, { PureComponent } from 'react'
import { Button, Form, Input, Radio } from 'antd'
import FormItem from '../../components/FormItem'
import InputArray from '../../components/InputArray'
import Upload from '../../components/Upload'

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
        const flieDecorator = getFieldDecorator('flie')

        return (
            <section>
                <div style={{ marginBottom: '20px' }}>
                    封装的uploda组件,主要可以解决AntDesign组件不能实现上传文件和其它表单一起提交的问题，因为我们要提图片或者文件类型的文件，
                所有我们要使用new FormData()的数据格式提交
                </div>
                <Form layout="horizontal" onSubmit={this.handleSubmit}>
                    <FormItem label="姓名" hasFeedback={false}>
                        {nameDecorator(<InputArray />)}
                    </FormItem>

                    <FormItem label="年龄">
                        {sexDecorator(<RadioGroup options={options} />)}
                    </FormItem>

                    <FormItem label="文件">
                        {flieDecorator(<Upload />)}
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