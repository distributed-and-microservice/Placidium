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
package cn.fanhub.placidium.repository;

import cn.fanhub.placidium.model.entity.RpcInfo;

/**
 *
 * @author chengfan
 * @version $Id: RpcInfoRepository.java, v 0.1 2018年05月05日 下午4:38 chengfan Exp $
 */
public interface RpcInfoRepository extends BaseRepository<RpcInfo, Long> {

    RpcInfo getByRpcValue(String rpcValue);
}