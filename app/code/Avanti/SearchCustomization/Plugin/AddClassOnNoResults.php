<?php

namespace Vendor\SearchCustomization\Plugin;

use Magento\CatalogSearch\Block\Result;
use Magento\Framework\View\Page\Config as PageConfig;

class AddBodyClassOnNoResults
{
    /**
     * @var PageConfig
     */
    private $pageConfig;

    public function __construct(PageConfig $pageConfig)
    {
        $this->pageConfig = $pageConfig;
    }

    /**
     * After plugin no método getResultCount
     */
    public function afterGetResultCount(Result $subject, $result)
    {
        if ((int)$result === 0) {
            $this->pageConfig->addBodyClass('search-no-results-page');
        }

        return $result;
    }
}
