import { useEffect, useRef } from 'react';
import useGetMessages from '../../hooks/useGetMessages';
import Message from './Message';

const Messages = () => {
    const { loading, messages } = useGetMessages();
    const lastMessageRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behaviour: 'smooth' });
        }, 100);
    }, [messages]);

    return (
        <div className="px-4 flex-1 overflow-auto">
            {!loading && messages.length > 0 && messages.map((message) => (
                <div key={message._id} ref={lastMessageRef}>
                    <Message message={message} />
                </div>
            ))}

            {!loading && messages.length === 0 && (
                <p className="text-center">Send a message to start the conversation</p>
            )}
        </div>
    );
};

export default Messages;