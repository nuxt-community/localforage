import Vue from 'vue'

const localForage = require('localforage')

const nuxtLocalForage = {
  install (Vue, options) {
    Vue.prototype.$localForage = new Vue({
      name: 'localForage',
      created () {
        return this.config(options)
      },
      methods: {
        getItem (key) {
          return new Promise((resolve, reject) => {
            localForage.getItem(key).then((value) => {
              resolve(value)
            }).catch((err) => {
              reject(err)
            })
          })
        },
        setItem (key, value) {
          return new Promise((resolve, reject) => {
            localForage.setItem(key, value).then((value) => {
              resolve(value)
            }).catch((err) => {
              reject(err)
            })
          })
        },
        removeItem (key) {
          return new Promise((resolve, reject) => {
            localForage.removeItem(key).then(() => {
              resolve()
            }).catch((err) => {
              reject(err)
            })
          })
        },
        clear () {
          return new Promise((resolve, reject) => {
            localForage.clear().then(() => {
              resolve()
            }).catch((err) => {
              reject(err)
            })
          })
        },
        length () {
          return new Promise((resolve, reject) => {
            localForage.length().then((numberOfKeys) => {
              resolve(numberOfKeys)
            }).catch((err) => {
              reject(err)
            })
          })
        },
        key (keyIndex) {
          return new Promise((resolve, reject) => {
            localForage.key(keyIndex).then((keyName) => {
              resolve(keyName)
            }).catch((err) => {
              reject(err)
            })
          })
        },
        keys () {
          return new Promise((resolve, reject) =>{
            localForage.keys().then((keys) => {
              resolve(keys)
            }).catch((err) => {
              reject(err)
            })
          })
        },
        iterate () {
          return new Promise((resolve, reject) => {
            localForage.iterate((value, key, iterationNumber) => {
              resolve([value, key, iterationNumber])
            }).then((result) => {
              resolve(result)
            }).catch((err) => {
              // This code runs if there were any errors
              console.log(err);
              reject(err)
            })
          })
        },
        setDriver (drivreName) {
          return new Promise((resolve, reject) => {
            resolve(localForage.setDriver(driverName))
          })
        },
        config (options) {
          return new Promise((resolve, reject) => {
            resolve(localForage.config(options))
          })
        },
        createInstance (options) {
          return new Promise((resolve, reject) => {
            resolve(localForage.createInstance(options))
          })
        }
      }
    })
  }
}

export default async function () {
  // Vue.use(nuxtLocalForage)
  // A voir comment init de base
  Vue.use(nuxtLocalForage, <%= serialize(options) %>)
}