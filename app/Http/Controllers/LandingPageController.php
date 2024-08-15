<?php

namespace App\Http\Controllers;

use App\Models\AdditionalProgram;
use App\Models\Hero;
use App\Models\Program;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LandingPageController extends Controller
{
    public function index(Request $request)
    {
        $heroes = Hero::where('is_active', true)
            ->orderBy('sort_order')
            ->get(['id', 'title', 'subtitle', 'image_url']);

        $programs = Program::where('is_active', true)
            ->orderBy('sort_order')
            ->get(['id', 'name', 'description', 'image_url']);

        $additionalPrograms = AdditionalProgram::where('is_active', true)
            ->orderBy('sort_order')
            ->get(['id', 'name', 'description', 'image_url']);

        $testimonials = Testimonial::where('is_active', true)
            ->get(['id', 'name', 'occupation', 'message', 'user_path']);

        return Inertia::render('Welcome', [
            'heroes' => $heroes,
            'programs' => $programs,
            'additionalPrograms' => $additionalPrograms,
            'testimonials' => $testimonials,
        ]);
    }
}
