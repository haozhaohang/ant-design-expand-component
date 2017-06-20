import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Button, Icon } from 'antd'

import './index.less'

class Upload extends PureComponent {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e) {
        const target = e.currentTarget

        this.props.onChange(target.files[0])
    }

    handleClick() {
        const input = this.input

        if (input.click) {
            input.click()
        } else {
            const e = document.createEvent('MouseEvents')
            e.initEvent('click', true, true)
            input.dispatchEvent(e)
        }
    }

    render() {
        const { value } = this.props

        return (
            <div className="upload-component">
                <input
                    type="file"
                    onChange={this.handleChange}
                    ref={input => (this.input = input)}
                />
                <Button onClick={this.handleClick}>
                    <Icon type="upload" /> {this.props.text}
                </Button>
                <div>{value && value['name'] ? value['name'] : ''}</div>
            </div>
        )
    }
}

Upload.propTypes = {
    onChange: PropTypes.func,
    text: PropTypes.string
}

Upload.defaultProps = {
    text: '上传文件'
}

export default Upload

