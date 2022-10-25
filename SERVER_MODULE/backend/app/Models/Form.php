<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Form extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'limit_one_response'
    ];

    /**
     * Get all of the allowed_domains for the Form
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function allowed_domains()
    {
        return $this->hasMany(AllowedDomain::class);
    }
}
