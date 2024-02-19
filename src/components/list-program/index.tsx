import React, { FC } from 'react'
import './style.css'
import ItemProgram from '../item-program'
import { arrayProgram } from '../../constants/constants'
import { Button, Form, Switch } from 'antd'
import { IProgram } from '../../modules'

declare global {
  interface Window {
    electron: {
      sendArray: (array: any[]) => void
    }
  }
}

const ListProgram: FC = () => {
  const onFinish = (values: IProgram[]) => {
    console.log('Success:', values)
    window.electron.sendArray(values)
  }
  return (
    <div className='listProgram-container'>
      <Form name='basic' onFinish={onFinish}>
        {arrayProgram.map(({ name, description, value }) => (
          <ItemProgram
            key={value}
            name={name}
            description={description}
            value={value}
          />
        ))}
        <Form.Item style={{ display: 'flex', justifyContent: 'center' }}>
          <Button type='primary' htmlType='submit'>
            Начать установку
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default ListProgram
