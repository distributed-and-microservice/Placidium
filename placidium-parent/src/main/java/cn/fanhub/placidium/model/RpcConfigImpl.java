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
package cn.fanhub.placidium.model;

import cn.fanhub.irelia.core.model.RpcConfig;
import lombok.Data;

/**
 *
 * @author chengfan
 * @version $Id: RpcConfigImpl.java, v 0.1 2018年05月01日 下午3:51 chengfan Exp $
 */
@Data
public class RpcConfigImpl implements RpcConfig {
    private String itfName;
    private String methodName;
    private String appName;
    private String rpcValue;
}