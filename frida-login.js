Java.perform(() => {
  const RootBeer = Java.use('com.scottyab.rootbeer.RootBeer');
  RootBeer.isRooted.implementation = function () {
    console.log('Hooking isRooted() method ...');
    return false;
  };
});
