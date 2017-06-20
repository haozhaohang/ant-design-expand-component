import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'antd'

const inputContainerProps = {
    labelCol: { span: 7 },
    wrapperCol: { span: 12 },
    hasFeedback: true
}

const buttonsContainerProps = {
    wrapperCol: { span: 12, offset: 7 }
}

function FormItem(props) {
    const { buttonsContainer, ...other } = props
    const defaultProps = buttonsContainer ? buttonsContainerProps : inputContainerProps

    return (
        <Form.Item
            className={buttonsContainer && 'buttons-container'}
            {...defaultProps}
            {...other}
        />
    )
}

FormItem.propTypes = {
    buttonsContainer: PropTypes.bool
}

export default FormItem
