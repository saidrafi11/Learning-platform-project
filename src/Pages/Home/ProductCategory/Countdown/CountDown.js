import React from 'react';

const CountDown = () => {
    return (
        <div>
            <h1 className='text-center font-bold text-3xl'>Winter deal ends in</h1>
            <div className='flex justify-center mb-5'>
                <div className="flex gap-5">
                    <div>
                        <span className="countdown font-mono text-4xl">
                            <span style={{ "--value": 15 }}></span>
                        </span>
                        days
                    </div>
                    <div>
                        <span className="countdown font-mono text-4xl">
                            <span style={{ "--value": 10 }}></span>
                        </span>
                        hours
                    </div>
                    <div>
                        <span className="countdown font-mono text-4xl">
                            <span style={{ "--value": 24 }}></span>
                        </span>
                        min
                    </div>
                    <div>
                        <span className="countdown font-mono text-4xl">
                            <span style={{ "--value": 42 }}></span>
                        </span>
                        sec
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountDown;