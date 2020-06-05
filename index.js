    class DevCampErr extends Error {
        constructor(msg = "You got an error", ...params) {
            super(...params);
            this.msg = msg;
        }
    }
    
    
    function siteComponent(func) {
      return func();
    }

    try {
      console.log(siteComponent('oops'));
    } catch(e) {
      throw new DevcampError('DevcampError', e);
    }

    widget = () => {
      return '<div>Hi there</div>';
    }