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
package cn.fanhub.placidium.manage.impl;

import cn.fanhub.irelia.core.model.RpcConfig;
import cn.fanhub.irelia.spi.core.IreliaService;
import cn.fanhub.irelia.upstream.dubbo.DubboServiceManager;
import cn.fanhub.irelia.upstream.dubbo.DubboUpstreamConfig;
import cn.fanhub.placidium.manage.SystemManager;
import cn.fanhub.placidium.model.entity.RpcInfo;
import cn.fanhub.placidium.model.entity.SystemInfo;
import cn.fanhub.placidium.model.request.RegisterModel;
import cn.fanhub.placidium.service.RpcInfoService;
import cn.fanhub.placidium.service.SystemInfoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.sql.Date;
import java.util.List;

/**
 *
 * @author chengfan
 * @version $Id: SystemManagerImpl.java, v 0.1 2018年05月05日 下午9:49 chengfan Exp $
 */
@Component
@Slf4j
public class SystemManagerImpl implements SystemManager {

    @Autowired
    private SystemInfoService systemInfoService;

    @Autowired
    private RpcInfoService rpcInfoService;

    @Override
    public boolean register(RegisterModel model) {
        String sysName = model.getSysName();
        DubboUpstreamConfig config = new DubboUpstreamConfig();
        config.setAddress(model.getRegisterUrl());
        config.setAppName(sysName);
        config.setPassword("123");
        config.setUsername("cf");

        Date date = new Date(System.currentTimeMillis());

        try {
            IreliaService register = DubboServiceManager.getInstance().register(config);
            List<RpcConfig> rpcConfigList = register.getIreliaServiceHolder().getRpcConfig(sysName);

            for (RpcConfig rpcConfig : rpcConfigList) {

                RpcInfo rpcInfo = new RpcInfo();
                rpcInfo.setCreateTime(date);
                rpcInfo.setDes(rpcConfig.getDes());
                rpcInfo.setRpcValue(rpcConfig.getRpcValue());
                rpcInfo.setRpcConfig(rpcConfig);
                rpcInfo.setName(rpcConfig.getRpcName());

                rpcInfoService.save(rpcInfo);
            }

            SystemInfo info = new SystemInfo();
            info.setCreateTime(date);
            info.setName(sysName);
            info.setRegisterUrl(model.getRegisterUrl());
            info.setUpstreamType("dubbo");
            systemInfoService.save(info);
            return true;
        } catch (Exception e) {
            log.error("register error: ", e);
            return false;
        }
    }
}