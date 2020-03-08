class tokenServiceClass {
  getToken() {
    let token = localStorage.getItem('token');
    if (!token) return null;
    return token;
  }

  checkAuthenticated() {
    let token = localStorage.getItem('token');
    if (!token) return false;
    else return !!token;
  }

  async setToken (val) {
    return await localStorage.setItem('token', val);
  }

  destroyToken () {
    return localStorage.removeItem('token');
  }

  async apiAuthenticate (params) {
    const credentials = {
      id: params.username,
      password: params.password
    };

    let options = {
      method: 'POST',
      body: JSON.stringify(credentials)
    };

    const tokenRequest = await fetch(process.env.VUE_APP_API_URL + "/auth", options);
    const tokenData = await tokenRequest.json();

    await this.setToken(tokenData);
    params.router.push("/account");
  }
}

export const tokenService = new tokenServiceClass();
