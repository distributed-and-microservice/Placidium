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
package cn.fanhub.placidium.service.impl;

import cn.fanhub.placidium.model.entity.RpcInfo;
import cn.fanhub.placidium.repository.RpcInfoRepository;
import cn.fanhub.placidium.service.RpcInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author chengfan
 * @version $Id: RpcInfoServiceImpl.java, v 0.1 2018年05月05日 下午4:29 chengfan Exp $
 */
@Service
public class RpcInfoServiceImpl extends BaseServiceImpl<RpcInfo, Long> implements RpcInfoService {

    @Autowired
    private RpcInfoRepository rpcInfoRepository;

    @Override
    public RpcInfo getByRpcValue(String rpcValue) {
        return rpcInfoRepository.getByRpcValue(rpcValue);
    }
}