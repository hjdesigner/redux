'use strict'
import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyCDpOcIXMrPssWkNNRokhf1ljfd9Vl2gwk',
  authDomain: 'reactflix-966c0.firebaseapp.com',
  databaseURL: 'https://reactflix-966c0.firebaseio.com',
  projectId: 'reactflix-966c0',
  storageBucket: 'reactflix-966c0.appspot.com',
  messagingSenderId: '297901605916'
})

const db = firebase.database()

export { db }
