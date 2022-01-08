
import * as qiniu from "qiniu-js";
let config = {
    useCdnDomain: true,
    region: qiniu.region.cn-east-2
}
let token = 'AccessKey:0c-HAK0-U3Xjh8VTZpaeDnGgyFE=:eyJzY29wZSI6IkJ1Y2tldCIsImRlYWRsaW5lIjoxNjQ0MjA5MzczfQ=='
let date = 1644209373875
let domain = 'domain'
export {
    config,
    token,
    domain,
    date
}