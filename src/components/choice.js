import AccountInformation from './apiFunctions/accountInformation';
import EmailCount from './apiFunctions/emailCount';
import EmailVerifier from './apiFunctions/emailVerifier';
import EmailFinder from './apiFunctions/emailFinder';
import DomainSearch from './apiFunctions/domainSearch';

function Choice() {
  return (
    <div>
      <AccountInformation />
      <EmailCount />
      <EmailVerifier />
      <EmailFinder />
      <DomainSearch />
    </div>
  );
}

export default Choice;