import grace from '../../config/grace.js';
import { getsessionkey } from '../../config/requst/api.js';
import wxback from '../../utils/wxutils.js';

grace.page({
  data: {},

  onLoad: function () {
    getsessionkey({ xx: 7 })
      .catch(errMsg => {
        wxback.noneToast(errMsg);
        console.log('getsessionkey err is', errMsg);
      });
  }
});
