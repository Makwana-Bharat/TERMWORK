<?php

namespace ProjectTag;

class ProjectTag
{
    public $TID;
    public $Tag;

    public function __construct($TID, $Tag)
    {
        $this->TID = $TID;
        $this->Tag = $Tag;
    }
}
