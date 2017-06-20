import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Button, Icon, Input } from 'antd'

import './index.less'

class InputArray extends PureComponent {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleChange(val, index) {
        const { value, onChange } = this.props
        const newValue = [...value]

        newValue[index] = val

        onChange(newValue)
    }

    handleDelete(e) {
        const target = e.currentTarget
        const index = target.parentNode.parentNode.firstChild.dataset.index
        const { value, onChange } = this.props
        const newValue = [...value]

        newValue.splice(Number(index), 1)

        onChange(newValue)
    }

    handleAdd() {
        const { value, onChange } = this.props

        const newValue = [...value, '']

        onChange(newValue)
    }

    render() {
        const { value, disabled, ...others } = this.props

        const closeBtn = <Icon type="close-circle" onClick={this.handleDelete} />

        return (
            <div className="input-array-component">
                {value.map((v, i) => {
                    return (
                        <div key={i}>
                            <Input
                                {...others}
                                value={v}
                                data-index={i}
                                suffix={closeBtn}
                                onChange={e => this.handleChange(e.target.value, i)}
                            />
                        </div>
                    )
                })}
                <div>
                    <Button type="dashed" icon="plus" onClick={this.handleAdd}>添加</Button>
                </div>
            </div>
        )
    }
}

InputArray.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.array,
    disabled: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number
    ])
}

InputArray.defaultProps = {
    value: []
}

export default InputArray
