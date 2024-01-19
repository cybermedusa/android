Java.perform(() => {
  const MainActivity = Java.use('group.cognisys.fridame.MainActivity');
  MainActivity.isAdmin.implementation = function () {
    console.log('Hooking isAdmin() method ...');
    return true;
  };
});
