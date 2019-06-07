const SparkMD5 = require('spark-md5');
import localstore from 'store';

module.exports = (function() {
  let session_password;
  let folder_passwords;

  const API = {
    init: () => init(),
    setSessionPassword: session_password =>
      setSessionPassword(session_password),
    updateFoldersPasswords: folderPass => updateFoldersPasswords(folderPass),
    removeFolderKey: slugFolderName => removeFolderKey(slugFolderName),

    getSessionPassword: () => getSessionPassword(),
    getFoldersPasswords: () => getFoldersPasswords(),

    getSessionPasswordFromLocalStorage: () =>
      getSessionPasswordFromLocalStorage(),

    saveSessionPasswordToLocalStorage: () =>
      saveSessionPasswordToLocalStorage(),

    emptySessionPasswordInLocalStorage: () =>
      emptySessionPasswordInLocalStorage(),

    hashCode: code => hashCode(code)
  };

  function init() {
    folder_passwords = localstore.get('folder_passwords') || {};
  }

  function setSessionPassword(_session_password) {
    session_password = _session_password;
  }
  function getSessionPassword() {
    return session_password;
  }

  function updateFoldersPasswords(_folder_passwords) {
    for (var folder_type in _folder_passwords) {
      if (_folder_passwords.hasOwnProperty(folder_type)) {
        if (!folder_passwords.hasOwnProperty(folder_type)) {
          folder_passwords[folder_type] = {};
        }
        folder_passwords[folder_type] = Object.assign(
          folder_passwords[folder_type],
          _folder_passwords[folder_type]
        );
      }
    }
    localstore.set('folder_passwords', folder_passwords);
  }

  // function removeFolderKey(slugFolderName) {
  //   delete folder_passwords[slugFolderName];
  //   // localstore.set('folder_passwords', folder_passwords);
  // }

  function getFoldersPasswords() {
    return folder_passwords;
  }

  function getSessionPasswordFromLocalStorage() {
    return localstore.get('session_password');
  }

  function saveSessionPasswordToLocalStorage() {
    if (session_password) {
      localstore.set('session_password', session_password);
    }
  }

  function emptySessionPasswordInLocalStorage() {
    localstore.set('session_password', '');
  }

  function hashCode(s) {
    return s.split('').reduce(function(a, b) {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0);
  }

  return API;
})();
