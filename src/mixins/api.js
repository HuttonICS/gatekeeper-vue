import store from '../store/store'

export default {
  data: function () {
    return {
      MAX_JAVA_INTEGER: 2147483647
    }
  },
  methods: {
    // TOKEN

    /**
     * Deletes the current json token
     *
     * @param {Object} user The user object containing the username and the token as the password
     * @param {function=} onSuccess Called on success
     * @param {function=} onError Called on failure
     * @returns A Promise
     */
    apiDeleteToken: function (user, onSuccess, onError) {
      return this.authAjax({ url: 'token', method: 'DELETE', data: user, success: onSuccess, error: onError })
    },
    /**
     * Requests a token given the user details
     *
     * @param {Object} user The user object containing the username and password
     * @param {function=} onSuccess Called on success
     * @param {function=} onError Called on failure
     * @returns A Promise
     */
    apiPostToken: function (user, onSuccess, onError) {
      return this.authAjax({ url: 'token', method: 'POST', data: user, success: onSuccess, error: onError })
    },
    // STATS
    /**
     * Requests the statistics used for the side menu (user count, request count, database count, etc).
     *
     * @param {function=} onSuccess Called on success
     * @param {function=} onError Called on failure
     * @returns A Promise
     */
    apiGetStatCounts: function (onSuccess, onError) {
      return this.authAjax({ url: 'stat/count', method: 'GET', success: onSuccess, error: onError })
    },
    // REQUESTS
    apiGetNewRequests: function (queryData, onSuccess, onError) {
      queryData.page -= 1
      return this.authAjax({ url: 'request/new', method: 'GET', data: queryData, success: onSuccess, error: onError })
    },
    apiPostDecisionNewRequests: function (requestId, decision, onSuccess, onError) {
      return this.authAjax({ url: 'request/new/' + requestId + '/decision', method: 'POST', data: decision, success: onSuccess, error: onError })
    },
    apiDeleteRequestNew: function (requestId, onSuccess, onError) {
      return this.authAjax({ url: 'request/new/' + requestId, method: 'DELETE', success: onSuccess, error: onError })
    },
    apiGetExistingRequests: function (queryData, onSuccess, onError) {
      queryData.page -= 1
      return this.authAjax({ url: 'request/existing', method: 'GET', data: queryData, success: onSuccess, error: onError })
    },
    apiPostDecisionExistingRequests: function (requestId, decision, onSuccess, onError) {
      decision['locale'] = store.getters.locale
      return this.authAjax({ url: 'request/existing/' + requestId + '/decision', method: 'POST', data: decision, success: onSuccess, error: onError })
    },
    apiDeleteRequestExisting: function (requestId, onSuccess, onError) {
      return this.authAjax({ url: 'request/existing/' + requestId, method: 'DELETE', success: onSuccess, error: onError })
    },
    apiPostActivationRequest: function (activationKey, onSuccess, onError) {
      var data = {
        activationKey: activationKey,
        locale: store.getters.locale
      }
      return this.authAjax({ url: 'request/activation', data: data, method: 'POST', success: onSuccess, error: onError })
    },
    // USERS
    apiGetUsers: function (queryData, onSuccess, onError) {
      queryData.page -= 1
      return this.authAjax({ url: 'user', method: 'GET', data: queryData, success: onSuccess, error: onError })
    },
    apiGetUser: function (userId, onSuccess, onError) {
      return this.authAjax({ url: 'user/' + userId, method: 'GET', success: onSuccess, error: onError })
    },
    apiPostUser: function (user, onSuccess, onError) {
      return this.authAjax({ url: 'user', method: 'POST', data: user, success: onSuccess, error: onError })
    },
    apiDeleteUser: function (userId, onSuccess, onError) {
      return this.authAjax({ url: 'user/' + userId, method: 'DELETE', success: onSuccess, error: onError })
    },
    apiPatchUserEmail: function (userId, emailUpdate, onSuccess, onError) {
      return this.authAjax({ url: 'user/' + userId + '/email', method: 'PATCH', data: emailUpdate, success: onSuccess, error: onError })
    },
    apiPatchUserPassword: function (userId, passwordUpdate, onSuccess, onError) {
      passwordUpdate['locale'] = store.getters.locale
      return this.authAjax({ url: 'user/' + userId + '/password', method: 'PATCH', data: passwordUpdate, success: onSuccess, error: onError })
    },
    apiPatchUserGatekeeperAccess: function (userId, gatekeeperAccess, onSuccess, onError) {
      return this.authAjax({ url: 'user/' + userId + '/gatekeeper', method: 'PATCH', data: gatekeeperAccess, success: onSuccess, error: onError })
    },
    apiPostPasswordReset: function (resetRequest, onSuccess, onError) {
      resetRequest['locale'] = store.getters.locale
      return this.authAjax({ url: 'passwordreset', method: 'POST', data: resetRequest, success: onSuccess, error: onError })
    },
    // DATABASES
    apiGetDatabases: function (queryData, onSuccess, onError) {
      queryData.page -= 1
      return this.authAjax({ url: 'database', method: 'GET', data: queryData, success: onSuccess, error: onError })
    },
    apiPostDatabase: function (database, onSuccess, onError) {
      return this.authAjax({ url: 'database', method: 'POST', data: database, success: onSuccess, error: onError })
    },
    apiDeleteDatabase: function (databaseId, onSuccess, onError) {
      return this.authAjax({ url: 'database/' + databaseId, method: 'DELETE', success: onSuccess, error: onError })
    },
    // PERMISSIONS
    apiGetUserPermissions: function (userId, queryData, onSuccess, onError) {
      queryData.page -= 1
      return this.authAjax({ url: `user/${userId}/permission`, method: 'GET', data: queryData, success: onSuccess, error: onError })
    },
    apiGetDatabasePermissions: function (databaseId, queryData, onSuccess, onError) {
      queryData.page -= 1
      return this.authAjax({ url: `database/${databaseId}/permission`, method: 'GET', data: queryData, success: onSuccess, error: onError })
    },
    apiPatchUserPermission: function (permission, onSuccess, onError) {
      return this.authAjax({ url: 'user/' + permission.userId + '/permission', method: 'PATCH', data: permission, success: onSuccess, error: onError })
    },
    apiPostUserPermission: function (permission, onSuccess, onError) {
      return this.authAjax({ url: 'user/' + permission.userId + '/permission', method: 'POST', data: permission, success: onSuccess, error: onError })
    },
    apiDeleteUserPermission: function (permission, onSuccess, onError) {
      return this.authAjax({ url: 'user/' + permission.userId + '/permission', method: 'DELETE', data: permission, success: onSuccess, error: onError })
    },
    // INSTITUTIONS
    apiGetInstitutions: function (onSuccess, onError) {
      var data = {
        page: 0,
        limit: this.MAX_JAVA_INTEGER
      }
      return this.authAjax({ url: 'institution', method: 'GET', data: data, success: onSuccess, error: onError })
    },
    apiPostInstitution: function (institution, onSuccess, onError) {
      return this.authAjax({ url: 'institution', method: 'POST', data: institution, success: onSuccess, error: onError })
    }
  }
}
