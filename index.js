import Vue from 'vue'

import { Swipe,SwipeItem } from 'mint-ui'
import { Popup } from 'mint-ui'
import { Loadmore } from 'mint-ui'
import { InfiniteScroll } from 'mint-ui'
import { Spinner } from 'mint-ui'
import { Search } from 'mint-ui'
import { Navbar, TabItem } from 'mint-ui'
import { TabContainer, TabContainerItem } from 'mint-ui'
import { IndexList, IndexSection } from 'mint-ui'
import { Cell } from 'mint-ui'
import { Field } from 'mint-ui'
import { DatetimePicker } from 'mint-ui'

import { MessageBox } from 'mint-ui'
import { Indicator } from 'mint-ui'
import { Toast } from 'mint-ui'
import { Badge } from 'mint-ui'


//mintUi全局组件
const version = '2.2.13';

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Popup.name, Popup)
Vue.component(Loadmore.name, Loadmore)
Vue.component(Spinner.name, Spinner)
Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Search.name, Search)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.component(IndexList.name, IndexList)
Vue.component(IndexSection.name, IndexSection)
Vue.component(Cell.name, Cell)
Vue.component(Field.name, Field)
Vue.component(Badge.name, Badge)
Vue.component(DatetimePicker.name, DatetimePicker)

Vue.use(InfiniteScroll)

Vue.$messagebox = Vue.prototype.$messagebox = MessageBox;
Vue.$toast = Vue.prototype.$toast = Toast;
Vue.$indicator = Vue.prototype.$indicator = Indicator;