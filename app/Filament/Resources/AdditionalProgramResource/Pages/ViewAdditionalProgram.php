<?php

namespace App\Filament\Resources\AdditionalProgramResource\Pages;

use App\Filament\Resources\AdditionalProgramResource;
use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;

class ViewAdditionalProgram extends ViewRecord
{
    protected static string $resource = AdditionalProgramResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\EditAction::make(),
        ];
    }
}
