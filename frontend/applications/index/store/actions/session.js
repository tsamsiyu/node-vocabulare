import ApiHelper from '../../helpers/ApiHelper';

export function load() {
    return {
        type: 'SESSION',
        payload: ApiHelper.get('/session')
    }
}

export function signout() {
    return {
        type: 'SESSION',
        payload: ApiHelper.post('/signout', null, (response, resolve) => {
            if (response.status) resolve({isGuest: true})
        })
    }
}

export function signin(data) {
     return {
         type: 'SESSION',
         payload: ApiHelper.post('/signin', data, (response, resolve) => {
             if (response.status) resolve(response.data);
         })
     }
}