import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (

        <Accordion className='w-75 mx-auto mt-5'>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Difference between javascript and nodejs</Accordion.Header>
                <Accordion.Body>
                    JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language. JavaScript is normally used for client-side  web application. Where Node JS is server side javascript environment.JavaScript running in any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome). So JavaScript programming is very easy to write, and put any running environment means proper browser. Whereas Node JS only support the V8 engine, which googles chrome specific.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Differences between SQL and NOSQL databases.</Accordion.Header>
                <Accordion.Body>
                    An SQL database also known as a relational database—and named for the programming language it's written in, Structured Query Language (SQL).
                    NoSQL databases also known as "non SQL" store data in a format other than relational tables. It's the more rigid, structured way of storing data. A relational database management system (RDBMS) executes queries, retrieves data, and edits data by updating, deleting, or creating new records. But in other hand nosql database offers greater flexibility, which makes them more intuitive. NoSQL databases come in a variety of types based on their data model. The main types are document, key-value, wide-column, and graph.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>What is the purpose of jwt and how does it work?</Accordion.Header>
                <Accordion.Body>
                    JSON Web Token is a standard used to create access tokens for an application. It works this way: the server generates a token that certifies the user identity, and sends it to the client. The client will send the token back to the server for every subsequent request, so the server knows the request comes from a correct identity.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

    );
};

export default Blogs;