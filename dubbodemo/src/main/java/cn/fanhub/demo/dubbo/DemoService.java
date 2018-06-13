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

import cn.fanhub.irelia.spi.core.annotation.Rpc;

import java.io.Serializable;

/**
 *
 * @author chengfan
 * @version $Id: DemoService.java, v 0.1 2018年05月08日 下午10:31 chengfan Exp $
 */
public interface DemoService extends Serializable {
    @Rpc(value = "cn.fanhub.dubbo.sayhello",
         name = "testName",
         desc = "testDes")
    String sayHello(String name);
}