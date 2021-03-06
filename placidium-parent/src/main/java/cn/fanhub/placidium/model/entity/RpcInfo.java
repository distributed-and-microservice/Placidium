/**
 *    Copyright 2018 chengfan(fanhub.cn)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package cn.fanhub.placidium.model.entity;

import cn.fanhub.irelia.core.model.RpcConfig;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.sql.Date;

/**
 *
 * @author chengfan
 * @version $Id: RpcInfo.java, v 0.1 2018年05月01日 下午3:35 chengfan Exp $
 */
@Entity
@Data
public class RpcInfo {
    @GeneratedValue
    @Id
    private long id;
    private String rpcValue;
    private String name;
    private String des;
    private Date createTime;
    private String updateTime;
    private String sysName;
    private boolean open;

    private String rpcConfig;

    public RpcConfig getRpcConfig() {
        RpcConfig rpcConfig = JSONObject.parseObject(this.rpcConfig, RpcConfig.class);
        rpcConfig.setOpen(this.open);
        return rpcConfig;
    }

    public void setRpcConfig(RpcConfig rpcConfig) {
        rpcConfig.setOpen(this.open);
        this.rpcConfig = JSON.toJSONString(rpcConfig);
    }
}