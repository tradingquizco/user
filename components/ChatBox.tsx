import { Button, Flex } from 'antd'
import Radio, { Group } from 'antd/es/radio'
import React from 'react'

const ChatBox = ({sugestions}: {sugestions: string[]}) => {

  return (
    <article className='w-full h-full border-[1px] rounded-md p-3 relative'>
        <main>
            {/* showing response text from backend */}
        </main>
        <footer className='absolute bottom-3 left-0 w-full'>
            <Flex>
                <Button type='text' color='primary' >What is Buy?</Button>
                {/* mapping on suggest */}
            </Flex>
        </footer>
    </article>
  )
}

export default ChatBox