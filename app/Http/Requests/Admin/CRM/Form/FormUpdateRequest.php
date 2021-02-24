<?php

namespace App\Http\Requests\Admin\CRM\Form;

use App\Http\Requests\BaseRequest;
use App\Interfaces\CRM\FormFieldInterface;
use App\Interfaces\CRM\FormInterface;
use Illuminate\Validation\Rule;

class FormUpdateRequest extends FormStoreRequest
{
    public function rules() : array
    {
        $rules = parent::rules();

        $rules['slug'] = [
            'required',
            'string',
            'max:' . FormInterface::FIELD_SLUG_MAX_LENGTH,
            Rule::unique('crm_forms')->ignore($this->form->id, 'id'),
        ];

        return $rules;
    }
}
