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

import cn.fanhub.placidium.model.Result;
import cn.fanhub.placidium.service.BaseService;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import java.io.Serializable;
import java.util.List;

/**
 *
 * @author chengfan
 * @version $Id: BaseCRUDController.java, v 0.1 2018年05月01日 下午5:51 chengfan Exp $
 */
public abstract class BaseCRUDController <T, ID extends Serializable>{

    protected BaseService<T, ID> baseService;

    /**
     * Gets By Id.
     *
     * @param id the id
     * @return the article
     */
    @GetMapping("/{id}")
    public Result<T> getById(@PathVariable ID id) {
        return Result.of(baseService.getOne(id));
    }

    /**
     * Gets all.
     *
     * @return the all
     */
    @GetMapping
    public Result<List<T>> getAll() {
        return Result.of(baseService.getAll());
    }

    /**
     * Update result.
     *
     * @param t the t
     * @return the result
     */
    @PutMapping
    public Result<T> update(T t) {
        return Result.of(baseService.update(t));
    }

    /**
     * Add result.
     *
     * @param t the t
     * @return the result
     */
    @PostMapping
    public Result<T> add(T t) {
        return Result.of(baseService.save(t));
    }

    /**
     * Delete result.
     *
     * @param t the t
     * @return the result
     */
    @DeleteMapping
    public Result delete(T t) {
        baseService.delete(t);
        return Result.success();
    }
}