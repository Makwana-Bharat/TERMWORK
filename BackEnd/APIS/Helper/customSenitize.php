<?php
function customSanitizeString($input)
{
    $trimmedInput = trim($input);
    $sanitizedInput = htmlspecialchars($trimmedInput, ENT_QUOTES, 'UTF-8');
    return $sanitizedInput;
}
