<?php include('../perch/runtime.php'); ?>
<?php perch_layout('blog-post-header'); ?>
	<main class="blog-main-content blog-post-main-content">
		<article class="blog-post-article blog-section" itemscope itemtype="https://schema.org/BlogPosting" itemprop="blogPost">
			<?php perch_blog_post(perch_get('s')); ?>

		</article>
	</main>
<?php perch_layout('main-footer'); ?>
<?php perch_layout('blogpost-footer-end-js'); ?>
