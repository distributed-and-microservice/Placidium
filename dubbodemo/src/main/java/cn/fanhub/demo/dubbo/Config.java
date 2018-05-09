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
package cn.fanhub.demo.dubbo;

import cn.fanhub.irelia.spi.dubbo.DubboStarter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;

/**
 *
 * @author chengfan
 * @version $Id: Config.java, v 0.1 2018年05月08日 下午10:30 chengfan Exp $
 */
@Component
@ComponentScan(basePackages = "cn.fanhub.demo.dubbo")
public class Config {
    @Bean(initMethod = "init")
    public DubboStarter dubboStarter() {
        DubboStarter dubboStarter = new DubboStarter();
        dubboStarter.setAppName("dubbo-test");
        dubboStarter.setProtocolPort(20880);
        dubboStarter.setRegistryUrl("multicast://224.5.6.7:1234");
        dubboStarter.setServiceThreads(10);
        return dubboStarter;
    }
}