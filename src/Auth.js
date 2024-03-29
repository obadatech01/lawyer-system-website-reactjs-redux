import axios from 'axios';

const Auth = {

    /**
     * Initialize axios headers.
     */
    init: () => {
      let user = JSON.parse(localStorage.getItem('user'));
      axios.defaults.headers.common['Authorization'] = user !== null ? user.token : '';
    },

    /**
     * Store user data after login.
     * @param user
     */
    login: user => {
        localStorage.setItem('user', JSON.stringify(user));
        axios.defaults.headers.common['Authorization'] = user.token;
    },

    /**
     * Delete user data.
     */
    logout: () => {
        delete axios.defaults.headers.common['Authorization'];
        localStorage.removeItem('user');
        localStorage.removeItem('token')
    },

    /**
     * Is user authenticated.
     * @returns {boolean}
     */
    auth: () => JSON.parse(localStorage.getItem('user')) !== null,

    /**
     * Is guest.
     * @returns {boolean}
     */
    guest: () => localStorage.getItem('user') === null,

    /**
     * Is owner.
     * @returns {boolean}
     */
    isOwner: () => (JSON.parse(localStorage.getItem('user')) !== null) && JSON.parse(localStorage.getItem('user')).role === 'مدير',

    /**
     * Is secretary.
     * @returns {boolean}
     */
    isSecretary: () => (JSON.parse(localStorage.getItem('user')) !== null) && JSON.parse(localStorage.getItem('user')).role === 'سكرتير',

    /**
     * Is accountant.
     * @returns {boolean}
     */
    isAccountant: () => (JSON.parse(localStorage.getItem('user')) !== null) && JSON.parse(localStorage.getItem('user')).role === 'محاسب',

    /**
     * Is lawyer.
     * @returns {boolean}
     */
    isLawyer: () => (JSON.parse(localStorage.getItem('user')) !== null) && JSON.parse(localStorage.getItem('user')).role === 'محامي',

};

export default Auth;