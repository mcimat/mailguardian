import React, { useState } from 'react';
import axios from 'axios';

function Content() {
    const [AccountInfo, setAccountInfo] = useState('');

    const [emailCount, setEmailCount] = useState('');
    const [userDomain, setUserDomain] = useState('');

    const [emailVerifier, setEmailVerifier] = useState('');
    const [userEmail, setUserEmail] = useState('');

    const [emailFinder, setEmailFinder] = useState('');
    const [domain, setDomain] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const [domainSearch, setDomainSearch] = useState('');
    const [company, setCompany] = useState('');

    const getAccountInfo = () => {
        axios.get(`https://api.hunter.io/v2/account?api_key=ebaec51e7fdde3fc15a0ab2dbfe22e0c3ea60d2e`)
            .then((response) => {
                // console.log(response.data.data);
                const { searches, verifications } = response.data.data.requests;
                const searchesUsed = searches.used;
                const searchesAvailable = searches.available;
                const verificationsUsed = verifications.used;
                const verificationsAvailable = verifications.available;
                
                setAccountInfo(`Searches-- Used: ${searchesUsed}, Available: ${searchesAvailable}`
                + ' ' +
                `Verifications-- Used: ${verificationsUsed}, Available: ${verificationsAvailable}`);
            }
        );
    };
  
    const getEmailCount = () => {
        axios.get(`https://api.hunter.io/v2/email-count?domain=${userDomain}`)
            .then((response) => { 
                //console.log(response.data);
                const emailCount = response.data.data;
                const total = emailCount.total;

                const domain = response.data.meta.params.domain;

                setEmailCount(`Total emails: ${total}`
                + ' ' +
                `Searched Site: ${domain}`);
            }
        );
    };

    const getEmailVerifier = () => {
        axios.get(`https://api.hunter.io/v2/email-verifier?email=${userEmail}&api_key=ebaec51e7fdde3fc15a0ab2dbfe22e0c3ea60d2e`)
            .then((response) => {
                //console.log(response.data);
                const emailVerify = response.data.data;
                const status = emailVerify.status;
                const result = emailVerify.result;
                const score = emailVerify.score;
                const email = emailVerify.email;

                setEmailVerifier(`Status: ${status}, result: ${result}, Score: ${score}`
                + ' ' +
                `Entered email: ${email}`);
            }
        );
    };

    const getEmailFinder = (e) => {
        e.preventDefault()
        axios.get(`https://api.hunter.io/v2/email-finder?domain=${domain}&first_name=${firstName}&last_name=${lastName}&api_key=ebaec51e7fdde3fc15a0ab2dbfe22e0c3ea60d2e`)
            .then((response) => {
                //console.log(response.data);
                const emailFinder = response.data.data;
                const email = emailFinder.email;
                const company = emailFinder.company;
                const position = emailFinder.position;
                const first = emailFinder.first_name;
                const last = emailFinder.last_name;

                setEmailFinder(`Email found: ${email}, Company: ${company}, Position: ${position}`
                + ' ' +
                `First: ${first}, Last: ${last}`);
            }
        );
    };

    const getDomainSearch = () => {
        axios.get(`https://api.hunter.io/v2/domain-search?domain=${company}&api_key=ebaec51e7fdde3fc15a0ab2dbfe22e0c3ea60d2e`)
            .then((response) => {
                console.log(response.data);
                // const { data, meta }  = response.data;
                const domainSearch = response.data.data;
                const domain = domainSearch.domain;
                const organization = domainSearch.organization;
                const industry = domainSearch.industry;
                const technologies = domainSearch.technologies;

                setDomainSearch(`Domain: ${domain}, Organization: ${organization}, Industry: ${industry}, Technologies: ${technologies}`);
            }
        );
    };

    return (
        <div>
            <h1> Account Info </h1>
            <button onClick={getAccountInfo}>Account Information</button>
            <div>{AccountInfo}</div>

            <h1> Email Count </h1>
            <input
                type='text'
                placeholder='Domain'
                value={userDomain}
                onChange={(e) => setUserDomain(e.target.value)}
            />
            <button onClick={getEmailCount}>Email Count</button>
            <div>{emailCount}</div>

            <h1> Email Verifier </h1>
            <input
                tpye='text'
                placeholder='Email'
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
            />
            <button onClick={getEmailVerifier}>Verify Email</button>
            <div>{emailVerifier}</div>

            <h1> Find an Email </h1>
            <form onSubmit={getEmailFinder}>
                <input
                    type='text'
                    placeholder='Domain'
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='First Name'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Last Name'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <button type='submit'>Find Email</button>
            </form>
            <div>{emailFinder}</div>

            <h1> Domain Search </h1>
            <input
                type='text'
                placeholder='Domain'
                value={company}
                onChange={(e) => setCompany(e.target.value)}
            />
            <button onClick={getDomainSearch}>Email Count</button>
            <div>{domainSearch}</div>
        </div>
    );
}

export default Content;