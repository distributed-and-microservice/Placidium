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
package cn.fanhub.placidium.controller;

import cn.fanhub.placidium.manage.SystemManager;
import cn.fanhub.placidium.model.request.RegisterModel;
import cn.fanhub.placidium.model.Result;
import cn.fanhub.placidium.model.entity.SystemInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author chengfan
 * @version $Id: SystemController.java, v 0.1 2018年05月02日 下午9:46 chengfan Exp $
 */
@RestController
@RequestMapping("/system")
public class SystemController extends BaseCRUDController<SystemInfo, Long> {

    @Autowired
    private SystemManager systemManager;

    @RequestMapping("/register")
    public Result register(@RequestBody RegisterModel model) {
        if (systemManager.register(model)) {
            return Result.success();
        }
        return Result.errorMessage("error");
    }
}