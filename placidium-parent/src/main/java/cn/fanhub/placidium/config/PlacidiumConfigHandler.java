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
package cn.fanhub.placidium.config;

import cn.fanhub.irelia.core.model.RpcConfig;
import cn.fanhub.irelia.core.upstream.UpstreamConfig;
import cn.fanhub.irelia.server.handler.AbstractConfigHandler;
import cn.fanhub.irelia.upstream.dubbo.DubboUpstreamConfig;
import cn.fanhub.placidium.model.entity.SystemInfo;
import cn.fanhub.placidium.service.RpcInfoService;
import cn.fanhub.placidium.service.SystemInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 *
 * @author chengfan
 * @version $Id: PlacidiumConfigHandler.java, v 0.1 2018年05月01日 下午2:42 chengfan Exp $
 */
@Component
public class PlacidiumConfigHandler extends AbstractConfigHandler {

    @Autowired
    private RpcInfoService rpcInfoService;

    @Autowired
    private SystemInfoService systemInfoService;

    @Override
    public RpcConfig getRpcConfig(String rpcValue) {
        return rpcInfoService.getByRpcValue(rpcValue).getRpcConfig();
    }

    @Override
    public UpstreamConfig getUpstreamConfig(String sysName) {
        SystemInfo systemInfo = systemInfoService.getByName(sysName);
        DubboUpstreamConfig upstreamConfig = new DubboUpstreamConfig();
        upstreamConfig.setUsername("cf");
        upstreamConfig.setPassword("123");
        upstreamConfig.setAppName(sysName);
        upstreamConfig.setName(sysName);
        upstreamConfig.setAddress(systemInfo.getRegisterUrl());
        return upstreamConfig;
    }

}