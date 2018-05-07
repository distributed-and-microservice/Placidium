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

/**
 *
 * @author chengfan
 * @version $Id: Result.java, v 0.1 2018年05月01日 下午5:51 chengfan Exp $
 */
public class Result<T> {

    private boolean success;

    private T       value;

    private String  errorMessage;

    private Result() {
    }

    private Result(final T value, final boolean success) {
        this.value = value;
        this.success = success;
    }

    private Result(final String errorMessage) {
        this.errorMessage = errorMessage;
        this.success = false;
    }

    public boolean isSuccess() {
        return success;
    }

    public T getValue() {
        if (!isSuccess())
            return null;

        return this.value;
    }

    public String getErrorMessage() {
        if (isSuccess())
            return null;
        return errorMessage;
    }

    public static <T> Result<T> of(T value) {
        if (value == null) {
            return ofNull();
        }
        return new Result<>(value, true);
    }

    public static <T> Result<T> errorMessage(String errorMessage) {
        return new Result<>(errorMessage);
    }

    @SuppressWarnings({ "unchecked", "rawtypes" })
    public static <T> Result<T> success() {
        return new Result(true, true);
    }

    @SuppressWarnings({ "unchecked", "rawtypes" })
    public static <T> Result<T> ofNull() {
        return new Result(null, true);
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public void setValue(T value) {
        this.value = value;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

}