import React, { FC } from 'react'
import './style.css'
import { Form, Switch } from 'antd'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'

interface IProps {
  name: string
  description: string
  value: string
}

const ItemProgram: FC<IProps> = ({ name, description, value }) => {
  return (
    // <div className='itemProgram-container'>
    <div className='itemProgram-container'>
      <Form.Item
        name={value}
        initialValue={false}
        valuePropName='checked'
        style={{ margin: '0' }}
      >
        <Switch
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          defaultChecked
        />
      </Form.Item>
      <div className='itemProgram-textWrap'>
        <span className='itemProgram-name'>{name}</span>
        <span className='itemProgram-description'>{description}</span>
      </div>
      {/* </> */}
    </div>
  )
}

export default ItemProgram
